import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Ensure this decorator is present
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
