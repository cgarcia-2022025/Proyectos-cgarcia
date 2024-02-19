'use strict'

import jwt from 'jsonwebtoken'
import Asignature from './asignature.model.js'

export const newAsignature = async (req, res) => {
    try {

        const token = req.header('token');

        if (!token) {
            console.log
            return res.status(401).send({ message: 'Acceso no autorizado, token no proporcionado' });
        }

        const decodedToken = jwt.verify(token, '@LlaveSuperSecretaDeIN6AM@'); 
        
        let data = req.body;
        data.teacher = decodedToken.id;
        console.log(data);

        let asignature = new Asignature(data);
        await asignature.save();
        res.status(201).send({ message: `Curso ${newAsignature} creado exitosamente` });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Error, no se pudo agregar el curso' })
    }
};


export const editAsignature = async (req, res) => {
    try {
        const asignature = await Asignature.findOne({ _id: req.params.id})
        if (!asignature) return res.status(404).send({ message: 'No se encuentra el curso' })
        const teacher = await Asignature.findOne({teacher: req.user.id})
        if (!teacher) return res.status(404).send({ message: 'Usuario no autorizado para actualizar' })
        
        //Actualizar los datos del curso
        course.name = req.body.name || course.name
        course.description = req.body.description || course.description

        //Guardar cambios
        await course.save();

        res.status(200).send({ message: `Curso ${course} actualizado existosamente` });

    } catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Error al actualizar el curso' })
    }
}