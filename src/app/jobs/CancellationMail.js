// import { format } from 'date-fns';
// import pt from 'date-fns/locale/pt';

import Mail from '../../lib/Mail';

class CancellationMail {
    get key() {
        return 'CancellationMail';
    }

    async handle({ data }) {
        const { appointment } = data;
        console.log('A fila executou');
        await Mail.sendMail({
            to: `${appointment.provider.name}<${appointment.provider.email}>`,
            subject: `Agendamento cancelado`,
            text: '<h1>Você tem um novo cancelamento</h1>',
        });
    }
}

export default new CancellationMail();
