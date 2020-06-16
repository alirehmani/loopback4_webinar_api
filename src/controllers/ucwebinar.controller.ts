import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Ucwebinar} from '../models';
import {UcwebinarRepository} from '../repositories';

export class UcwebinarController {
  constructor(
    @repository(UcwebinarRepository)
    public ucwebinarRepository : UcwebinarRepository,
  ) {}

  @post('/ucwebinars', {
    responses: {
      '200': {
        description: 'Ucwebinar model instance',
        content: {'application/json': {schema: getModelSchemaRef(Ucwebinar)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ucwebinar, {
            title: 'NewUcwebinar',
            exclude: ['webunarId'],
          }),
        },
      },
    })
    ucwebinar: Omit<Ucwebinar, 'webunarId'>,
  ): Promise<Ucwebinar> {
    return this.ucwebinarRepository.create(ucwebinar);
  }

  @get('/ucwebinars/count', {
    responses: {
      '200': {
        description: 'Ucwebinar model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Ucwebinar) where?: Where<Ucwebinar>,
  ): Promise<Count> {
    return this.ucwebinarRepository.count(where);
  }

  @get('/ucwebinars', {
    responses: {
      '200': {
        description: 'Array of Ucwebinar model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Ucwebinar, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Ucwebinar) filter?: Filter<Ucwebinar>,
  ): Promise<Ucwebinar[]> {
    return this.ucwebinarRepository.find(filter);
  }

  @patch('/ucwebinars', {
    responses: {
      '200': {
        description: 'Ucwebinar PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ucwebinar, {partial: true}),
        },
      },
    })
    ucwebinar: Ucwebinar,
    @param.where(Ucwebinar) where?: Where<Ucwebinar>,
  ): Promise<Count> {
    return this.ucwebinarRepository.updateAll(ucwebinar, where);
  }

  @get('/ucwebinars/{id}', {
    responses: {
      '200': {
        description: 'Ucwebinar model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Ucwebinar, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Ucwebinar, {exclude: 'where'}) filter?: FilterExcludingWhere<Ucwebinar>
  ): Promise<Ucwebinar> {
    return this.ucwebinarRepository.findById(id, filter);
  }

  @patch('/ucwebinars/{id}', {
    responses: {
      '204': {
        description: 'Ucwebinar PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ucwebinar, {partial: true}),
        },
      },
    })
    ucwebinar: Ucwebinar,
  ): Promise<void> {
    await this.ucwebinarRepository.updateById(id, ucwebinar);
  }

  @put('/ucwebinars/{id}', {
    responses: {
      '204': {
        description: 'Ucwebinar PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ucwebinar: Ucwebinar,
  ): Promise<void> {
    await this.ucwebinarRepository.replaceById(id, ucwebinar);
  }

  @del('/ucwebinars/{id}', {
    responses: {
      '204': {
        description: 'Ucwebinar DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ucwebinarRepository.deleteById(id);
  }
}
