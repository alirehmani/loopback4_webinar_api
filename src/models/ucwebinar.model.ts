import {Entity, model, property} from '@loopback/repository';

@model()
export class Ucwebinar extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  webunarId?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  topics: string[];


  constructor(data?: Partial<Ucwebinar>) {
    super(data);
  }
}

export interface UcwebinarRelations {
  // describe navigational properties here
}

export type UcwebinarWithRelations = Ucwebinar & UcwebinarRelations;
