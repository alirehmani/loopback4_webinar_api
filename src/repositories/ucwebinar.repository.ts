import {DefaultCrudRepository} from '@loopback/repository';
import {Ucwebinar, UcwebinarRelations} from '../models';
import {WebinarContextDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UcwebinarRepository extends DefaultCrudRepository<
  Ucwebinar,
  typeof Ucwebinar.prototype.webunarId,
  UcwebinarRelations
> {
  constructor(
    @inject('datasources.webinarContext') dataSource: WebinarContextDataSource,
  ) {
    super(Ucwebinar, dataSource);
  }
}
