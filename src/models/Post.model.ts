import { Sequelize, Model, DataTypes } from 'sequelize'

export class PostModel extends Model {
  public id: number
  public writerID: number
  public title: string
  public option: number
  public content: string
  public category: string
  public createdAt: Date
  public updatedAt: Date
}

export function init(sequelize: Sequelize) {
  PostModel.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      writerID: {
        type: DataTypes.INTEGER,
        onDelete: 'cascade',
        references: {
          model: 'users',
          key: 'id',
        },
        allowNull: false,
        field: 'writer_id',
      },
      title: {
        type: DataTypes.STRING,
      },
      option: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
      },
    },
    {
      sequelize,
      tableName: 'post',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  )
}

export function associate() {}
