import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { CreateRoleDto } from './dtos/role.dto';
import { Permission } from 'src/common/decorators/metadata/permission.decorator';

@Permission('admin')
@Controller('role')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  createRole(@Body() createRoleDto: CreateRoleDto) {
    return this.roleService.createRole(createRoleDto);
  }

  @Get('/all')
  getAllRoles() {
    return this.roleService.findAll();
  }

  @Get(':id')
  getRoleById(@Param() id: number) {
    return this.roleService.findOne(id);
  }

  @Delete(':id')
  deleteRoleById(@Param() id: number) {
    return this.roleService.remove(id);
  }
}
