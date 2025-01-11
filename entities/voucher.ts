import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Voucher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  code: string;

  @Column()
  generatedAt: Date;

  @Column()
  expiryDate: Date;

  @Column({ type: 'longtext' })
  qrCode: string;
}
