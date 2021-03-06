import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
    async getAll(req, res) {
        const student = await Student.findAll();
        return res.json({ student });
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string()
                .email()
                .required(),
            year: Yup.number().required(),
            weight: Yup.number().required(),
            height: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }

        const { name, email, year, weight, height } = await Student.create(
            req.body
        );
        return res.status(201).json({ name, email, year, weight, height });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            year: Yup.number(),
            weight: Yup.number(),
            height: Yup.number(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Validation fails' });
        }
        const student = await Student.findByPk(req.params.id);

        if (!student) {
            return res.status(400).json({ error: 'Student dont exists' });
        }

        const { name, email, year, weight, height } = await student.update(
            req.body
        );
        return res.status(201).json({ name, email, year, weight, height });
    }
}

export default new StudentController();
