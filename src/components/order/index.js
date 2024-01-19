import { useDispatch, useSelector } from 'react-redux';
import Header from '@/components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
import ContactForm from '@/components/contacts';
import {
    Container,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';

export default function Order() {
    const data = useSelector((state) => state.usercart.userCart);
    const dispatch = useDispatch();
    const router = useRouter();
    let total = 0;

    data.forEach((item) => {
        total += item.count * item.price;
    });

    return (
        <>
            <Header />
            <Container sx={{ display: 'flex', gap: '5' }}>
                <div style={{ width: '500px' }}>
                    <ContactForm total={total} />
                </div>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Название</TableCell>
                            <TableCell>Тип</TableCell>
                            <TableCell>Цена</TableCell>
                            <TableCell>Количество</TableCell>
                            <TableCell>Сумма</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item, index) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell align="center">{item.count}</TableCell>
                                <TableCell>{item.price * item.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <div className="mt-5">Итог: {total}</div>
                </Table>

            </Container>
        </>
    );
}
