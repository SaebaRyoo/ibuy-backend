import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaEntity } from './area.entity';
import { SpuEntity } from '../../mall-service-goods/spu/spu.entity';

@Controller('area')
export class AreaController {
  @Inject(AreaService)
  private areaService: AreaService;

  /**
   * 分页+条件查找
   * @param current
   * @param pageSize
   * @param area
   */
  @Post('/list/:current/:pageSize')
  async findList(
    @Param('current') current: number,
    @Param('pageSize') pageSize: number,
    @Body() area: AreaEntity,
  ) {
    return await this.areaService.findList({ current, pageSize }, area);
  }

  /**
   * 添加
   * @param body
   */
  @Post()
  add(@Body() body: AreaEntity) {
    return this.areaService.add(body);
  }

  /**
   * 根据id查找
   * @param id
   */
  @Get('/:id')
  async findById(@Param('id') id: string) {
    return this.areaService.findById(id);
  }

  /**
   * 根据id更新
   * @param id
   * @param member
   */
  @Patch('/:id')
  update(@Param('id') id: string, @Body() member: AreaEntity) {
    return this.areaService.update(id, member);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number) {
    return this.areaService.remove(id);
  }

  @Get()
  async findAll() {
    return this.areaService.findAll();
  }
}
