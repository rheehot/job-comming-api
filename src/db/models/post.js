module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define('Posts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        writerId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING
        },
        option: {
            type: DataTypes.TINYINT,
            allowNULL: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNULL: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNULL: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    }, {
        timestamps: false,
    });
    Posts.associate = (models) => {
        Posts.belongsTo(models.Users, {
            foreignKey: 'writerId',
            targetKey: 'userId',
            onDelete: 'cascade',
        })
    };
    return Posts
}
