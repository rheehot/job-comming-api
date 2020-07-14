module.exports = (sequelize, DataTypes) => {
    return sequelize.define('post', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        writer_id: {
            type: Sequelize.CHAR(60),
            references: {
                model: {
                    tableName: 'Users'
                },
                key: 'userid'
            },
            allowNull: false,
        },
        title: {
            type: Sequelize.STRING
        },
        option: {
            type: Sequelize.TINYINT,
            allowNULL: false,
        },
        content: {
            type: Sequelize.TEXT,
            allowNULL: false,
        },
        category: {
            type: Sequelize.STRING,
            allowNULL: false,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }, {
        timestamps: false,
    })
}