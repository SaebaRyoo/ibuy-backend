import { Get, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ParaEntity } from './para.entity';
import { InjectRepository } from '@nestjs/typeorm';
import Result from '../../../common/utils/Result';
import findWithConditions from '../../../common/utils/findWithConditions';

@Injectable()
export class ParaService {
  constructor(
    @InjectRepository(ParaEntity)
    private paraRepository: Repository<ParaEntity>,
  ) {}

  async findList(pageParma: any, conditions) {
    const [data, total] = await findWithConditions(
      this.paraRepository,
      conditions,
      pageParma,
      'para',
    );
    return new Result({ data, total });
  }

  async findById(id: number) {
    const data = await this.paraRepository.findOneBy({ id });
    return new Result(data);
  }

  async add(para: ParaEntity) {
    const data = await this.paraRepository.insert(para);
    return new Result(data);
  }

  async update(id: number, para: ParaEntity) {
    const data = await this.paraRepository
      .createQueryBuilder()
      .update(ParaEntity)
      .set(para)
      .where('id = :id', { id })
      .execute();
    return new Result(data);
  }

  async remove(id: number) {
    await this.paraRepository.delete(id);
    return new Result(null);
  }

  @Get()
  async findAll() {
    const data = await this.paraRepository.find();
    return new Result(data);
  }
}
