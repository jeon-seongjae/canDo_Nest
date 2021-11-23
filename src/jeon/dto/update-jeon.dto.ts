import { PartialType } from '@nestjs/mapped-types';
import { CreateJeonDto } from './create-jeon.dto';

export class UpdateJeonDto extends PartialType(CreateJeonDto) {}
