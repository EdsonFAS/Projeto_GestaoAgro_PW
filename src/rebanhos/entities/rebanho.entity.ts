import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rebanho {


    @PrimaryGeneratedColumn()
    IdRebanho: Number;
    
      @Column()
      fk_Animal_CodigoBrinco: string;
    
      @Column()
      Tipo: String;
    
      @Column()
      Destino: string;
    
   
}
