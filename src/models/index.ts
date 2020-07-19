import { Sequelize, Options, Model } from 'sequelize'

export { AuthUserModel } from './AuthUser.model'
import {
  init as initAuthUserInfoModel,
  associate as associateAuthUserInfoModel,
} from './AuthUser.model'

export { UserInfoModel } from './UserInfo.model'
import {
  init as initUserInfoModel,
  associate as associateUserInfoModel,
} from './UserInfo.model'

export { PostModel } from './Post.model'
import { init as initPostModel, associate as associatePostModel } from './Post.model'

export { MentoringModel } from './Mentoring.model'
import {
  init as initMentoringModel,
  associate as associateMentoringModel,
} from './Mentoring.model'

export async function init(options: Options) {
  const sequelize = new Sequelize(options)

  initAuthUserInfoModel(sequelize)
  initUserInfoModel(sequelize)
  initPostModel(sequelize)
  initMentoringModel(sequelize)

  associateAuthUserInfoModel()
  associateUserInfoModel()
  associatePostModel()
  associateMentoringModel()

  return sequelize
}

export function getTableName(model: typeof Model) {
  return model.tableName
}

type AbstractInstanceType<T> = T extends { prototype: infer U } ? U : never

export function getColumnName<T extends typeof Model>(
  model: T,
  field: keyof AbstractInstanceType<T>,
) {
  return model.rawAttributes[field as string].field
}

export function getTableNameDotColumnName<T extends typeof Model>(
  model: T,
  field: keyof AbstractInstanceType<T>,
) {
  return `${getTableName(model)}.${getColumnName(model, field)}`
}
