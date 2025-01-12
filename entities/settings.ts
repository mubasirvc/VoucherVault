import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Settings {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ default: "Redeem Your Voucher Now!" })
  title: string;

  @Column({ default: 24 })
  titleSize: number;

  @Column({ default: 12 })
  textSize: number;

  @Column({ default: 100 })
  voucherWidth: number;

  @Column({ default: 100 })
  voucherHeight: number;
}
