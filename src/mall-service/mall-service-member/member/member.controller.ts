import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberEntity } from './member.entity';

@Controller('member')
export class MemberController {
  @Inject(MemberService)
  private memberService: MemberService;

  /**
   * 分页查找会员列表
   * @param pageParam
   * @param member
   */
  @Post('/list')
  async findList(
    @Body('pageParam') pageParam: any,
    @Body('conditions') member: MemberEntity,
  ) {
    return await this.memberService.findList(pageParam, member);
  }

  /**
   * 添加会员
   * @param body
   */
  @Post('/add')
  add(@Body() body: any) {
    return this.memberService.add(body);
  }

  /**
   * 根据id查找会员
   * @param id
   */
  @Get('/:id')
  async findById(@Param('id') id: number) {
    return this.memberService.findById(id);
  }

  /**
   * 根据id更新member信息
   * @param id
   * @param member
   */
  @Patch('/:id')
  update(@Param('id') id: string, @Body() member: MemberEntity) {
    return this.memberService.update(id, member);
  }
}