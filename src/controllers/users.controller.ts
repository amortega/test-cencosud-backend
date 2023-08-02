import {
  repository
} from '@loopback/repository';
import {
  get,
  getModelSchemaRef,
  response
} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

export class UsersController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users')
  @response(200, {
    description: 'Array of User model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(User, {includeRelations: true}),
        },
      },
    },
  })
  async find(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }
}
