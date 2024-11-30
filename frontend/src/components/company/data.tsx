import {CustomButton} from "../button/CustomButton";

type Data = {
    id: number;
    date: string;
    title: string;
    subtitle?: string;
    sum: number;
    button: JSX.Element;
};
export enum ButtonText{
    SIGNATURE = 'На подпись',
    SIMPLE_CLAIM = 'Просто всех послать',
    HARD_CLAIM = ' Конструктивно всех послать',
    SEND = ' Отправить',
}

export const data: Data[] = [
    {
        id: 28,
        date: '30.06.2022',
        title: 'ООО "КОРПУС-ИТ"',
        subtitle: 'Оказание услуг по договору № 26/09 на основании акта № 1450 от 30 июня 2020 года, в т.ч. НДС 18%',
        sum: -21000000,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 12,
        date: '30.06.2022',
        title: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОБИЛСТИЛ"',
        subtitle: 'Оказание услуг по договору № 26/09 на основании акта № 1450 от 30 июня 2020 года, в т.ч. НДС 18%',
        sum: -10002030,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 5,
        date: '30.06.2022',
        title: 'ИП Жуков Валерий Сергеевич',
        subtitle: 'Услуги по ремонту за июнь, НДС не облагается',
        sum: -3000069,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 4,
        date: '30.06.2022',
        title: 'ООО "Берест"',
        sum: -84300,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 1,
        date: '30.06.2022',
        title: 'УФК по Свердловской области (Государственное учреждение - Свердловское региональное отделение Фонда социального страхования Российской Федерации)',
        sum: -15900,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 27,
        date: '21.10.2021',
        title: 'MasterBrok',
        sum: -106000,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
    {
        id: 26,
        date: '20.10.2021',
        title: 'MR ANTON TAGUNOV',
        sum: -189800,
        button: <CustomButton text={ButtonText.SIGNATURE}/>
    },
];
