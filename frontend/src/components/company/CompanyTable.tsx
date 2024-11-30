import {Table} from "@alfalab/core-components/table";
import {Amount} from "@alfalab/core-components/amount";
import {Typography} from '@alfalab/core-components/typography';
import {data} from "./data";
import {useMemo, useState} from "react";

export const CompanyTable = () => {

    const [perPage, setPerPage] = useState(8);
    const [page, setPage] = useState(0);

    const currentPageData = useMemo(() => {
        return data.slice(page * perPage).slice(0, perPage);
    }, [data, page, perPage]);

    return (
        <Table width='800px'>
            <Table.THead>
                <Table.THeadCell title='Дата' width='10px'>
                    Дата
                </Table.THeadCell>

                <Table.THeadCell title='Контрагент'>Контрагент</Table.THeadCell>
                <Table.THeadCell title='Подпись' textAlign='center' width={100}>
                    Подпись
                </Table.THeadCell>

                <Table.THeadCell title='Сумма' textAlign='right' width={100}>
                    Сумма
                </Table.THeadCell>

            </Table.THead>
            <Table.TBody>
                {currentPageData.map((row) => (
                    <Table.TRow key={row.id}>
                        <Table.TCell>
                            <Typography.Text view='primary-small' tag='div'>
                                {row.date}
                            </Typography.Text>
                        </Table.TCell>

                        <Table.TCell>
                            <Typography.Text view='primary-small' tag='div'>
                                {row.title}
                            </Typography.Text>
                        </Table.TCell>

                        <Table.TCell>
                            <Typography.Text view='primary-small' tag='div'>
                                {row.button}
                            </Typography.Text>
                        </Table.TCell>

                        <Table.TCell>
                            <Amount
                                value={row.sum}
                                currency='RUR'
                                minority={100}
                                view='withZeroMinorPart'
                                bold='full'
                                transparentMinor={true}
                            />
                        </Table.TCell>
                    </Table.TRow>
                ))}
            </Table.TBody>
        </Table>
    );
}



