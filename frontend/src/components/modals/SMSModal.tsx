import React, {FC} from 'react';
import {Modal} from "@alfalab/core-components/modal";
import {Button} from "@alfalab/core-components-button";

interface SmsModalProps {
    isOpen: boolean;
    handleClose: () => void
}

export const SmsModal: FC<SmsModalProps> = ({isOpen, handleClose}) => {
    return (
        <div>
            <Modal open={isOpen} onClose={handleClose} fixedPosition={true}>
                                <Modal.Header
                    sticky={true}
                    hasCloser={true}
                    title={'Не приходит сообщение?'}

                />
                <Modal.Content flex={true} >
                    <div style={{width:'80%'}}>
                       Если у вас изменился номер  - позвоните в отделение банка.
                    </div>
                </Modal.Content>
                <Modal.Footer sticky={true}>
                    <Button
                        size={document.body.clientWidth < 450 ? 'm' : 's'}
                        view='primary'
                        onClick={handleClose}
                    >
                        {'Ввернуться к вводу кода'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

