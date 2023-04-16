// Base de datos con postgres
import Sequelize from 'sequelize'

// {Nombre de la BD, Usuario, Contraseña}
export const sequelize = new Sequelize('TecnoSoluciones','postgres','1234',{
    host: 'localhost',
    dialect: 'postgres'
})
