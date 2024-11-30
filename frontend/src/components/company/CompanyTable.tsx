import React from 'react';
import {Table} from "@alfalab/core-components/table";
import {Amount} from "@alfalab/core-components/amount";
import { Typography } from '@alfalab/core-components/typography';

export const CompanyTable = () => {

    const data = [
        {
            id: 28,
            date: '30.06.2022',
            title: 'ООО "КОРПУС-ИТ"',
            sum: 21000000,
        },
        {
            id: 12,
            date: '30.06.2022',
            title: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "МОБИЛСТИЛ"',
            subtitle:
                'Оказание услуг по договору № 26/09 на основании акта № 1450 от 30 июня 2020 года, в т.ч. НДС 18%',
            sum: 10002030,
        },
        {
            id: 5,
            date: '30.06.2022',
            title: 'ИП Жуков Валерий Сергеевич',
            subtitle: 'Услуги по ремонту за июнь, НДС не облагается',
            sum: 3000069,
        },
        {
            id: 4,
            date: '30.06.2022',
            title: 'ООО "Берест"',
            sum: 84300,
        },
        {
            id: 1,
            date: '30.06.2022',
            title: 'УФК по Свердловской области (Государственное учреждение - Свердловское региональное отделение Фонда социального страхования Российской Федерации)',
            sum: 15900,
        },
        {
            id: 27,
            date: '21.10.2021',
            title: 'MasterBrok',
            sum: 106000,
        },
        {
            id: 26,
            date: '20.10.2021',
            title: 'MR ANTON TAGUNOV',
            sum: 189800,
        },
    ];

    Array(100)
        .fill('')
        .forEach((_, i) =>
            data.push({
                id: (i + 1) * 100,
                date: '20.10.2021',
                title: `Контрагент #${i + 1}`,
                sum: 1000000 + (i + 1) * 10000,
            }),
        );


        const [perPage, setPerPage] = React.useState(5);
        const [page, setPage] = React.useState(0);

        const handlePerPageChange = (value: any) => {
            setPage(0);
            setPerPage(value);
        };

        const handlePageChange = (pageIndex: any) => setPage(pageIndex);

        const pagesCount = Math.ceil(data.length / perPage);

        const currentPageData = React.useMemo(() => {
            return data.slice(page * perPage).slice(0, perPage);
        }, [data, page, perPage]);

        return (
            <Table
                pagination={
                    <Table.Pagination
                        perPage={perPage}
                        currentPageIndex={page}
                        pagesCount={pagesCount}
                        possiblePerPage={[5, 25, 50, 100]}
                        onPageChange={handlePageChange}
                        onPerPageChange={handlePerPageChange}
                    />
                }
            >
                <Table.THead>
                    <Table.THeadCell title='Дата' width='120px'>
                        Дата
                    </Table.THeadCell>

                    <Table.THeadCell title='Контрагент'>Контрагент</Table.THeadCell>

                    <Table.THeadCell title='Сумма' textAlign='right' width={268}>
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



