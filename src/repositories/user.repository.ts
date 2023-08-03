import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {TestJsonDataDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  constructor(
    @inject('datasources.testJSONData') dataSource: TestJsonDataDataSource,
  ) {
    super(User, dataSource);
  }
}
