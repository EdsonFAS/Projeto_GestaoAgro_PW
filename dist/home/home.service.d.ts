import { CreateHomeDto } from './dto/create-home.dto';
import { UpdateHomeDto } from './dto/update-home.dto';
export declare class HomeService {
    create(createHomeDto: CreateHomeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHomeDto: UpdateHomeDto): string;
    remove(id: number): string;
}
