from flask import Flask, request, jsonify
import joblib
import pandas as pd
from concurrent.futures import ThreadPoolExecutor
import time

best_model = joblib.load('best_model.pkl')
onehot_encoder = joblib.load('onehot_encoder.pkl')
label_encoder = joblib.load('label_encoder.pkl')
feature_columns = joblib.load('feature_columns.pkl')
unique_methods = joblib.load('unique_methods.pkl')

app = Flask(__name__)

executor = ThreadPoolExecutor(max_workers=20)


def prepare_input(input_json, encoder, feature_columns, unique_methods):
    features = {
        'segment': input_json['segment'],
        'role': input_json['role'],
        'mobileApp': input_json['mobileApp'],
        'claims': input_json['claims'],
        'signed_basic_mobile': input_json['signedDocumentsBasicMobile'],
        'signed_basic_web': input_json['signedDocumentsBasicWeb'],
        'signed_important_mobile': input_json['signedDocumentsImportantMobile'],
        'signed_important_web': input_json['signedDocumentsImportantWeb'],
    }

    features['total_signatures'] = features['signed_basic_mobile'] + features['signed_basic_web'] + \
                                   features['signed_important_mobile'] + features['signed_important_web']
    features['web_vs_mobile_signatures'] = features['signed_basic_web'] - features['signed_basic_mobile']

    categorical_values = [[features[col] for col in ['segment', 'role', 'mobileApp']]]
    encoded_categorical = encoder.transform(categorical_values)

    available_methods = input_json.get('availableMethods', [])
    binary_values = [[int(method in available_methods) for method in unique_methods]]

    numerical_values = [[features[col] for col in ['claims', 'signed_basic_mobile', 'signed_basic_web',
                                                   'signed_important_mobile', 'signed_important_web',
                                                   'total_signatures', 'web_vs_mobile_signatures']]]

    input_data = pd.concat([
        pd.DataFrame(numerical_values, columns=['claims', 'signed_basic_mobile', 'signed_basic_web',
                                                'signed_important_mobile', 'signed_important_web',
                                                'total_signatures', 'web_vs_mobile_signatures']),
        pd.DataFrame(binary_values, columns=unique_methods),
        pd.DataFrame(encoded_categorical, columns=encoder.get_feature_names_out())
    ], axis=1)

    for col in feature_columns:
        if col not in input_data.columns:
            input_data[col] = 0
    input_data = input_data[feature_columns]

    return input_data


def handle_request(input_json):
    with app.app_context():
        try:
            start_time = time.time()

            input_data = prepare_input(input_json, onehot_encoder, feature_columns, unique_methods)
            prediction = best_model.predict(input_data)
            recommended_method = label_encoder.inverse_transform(prediction)[0]

            end_time = time.time()

            print(f"Время выполнения запроса: {end_time - start_time:.4f} секунд")

            return recommended_method
        except Exception as e:
            return jsonify({'error': str(e)}), 400


@app.route('/predict', methods=['POST'])
def predict():
    input_json = request.json

    future = executor.submit(handle_request, input_json)

    return future.result()


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, threaded=False)
