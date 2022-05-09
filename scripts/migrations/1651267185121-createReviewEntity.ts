import {MigrationInterface, QueryRunner} from "typeorm";

export class createReviewEntity1651267185121 implements MigrationInterface {
    name = 'createReviewEntity1651267185121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "home_property_types" ("home_property_type_id" SERIAL NOT NULL, "name" character varying NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, CONSTRAINT "PK_a65d5874c7828e94ef386cbead6" PRIMARY KEY ("home_property_type_id"))`);
        await queryRunner.query(`CREATE TABLE "home_location_features" ("home_location_feature_id" SERIAL NOT NULL, "name" character varying NOT NULL, "content" text NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "home_product_location_id" integer, CONSTRAINT "PK_12a9109c2a17bb9f14ec1a36455" PRIMARY KEY ("home_location_feature_id"))`);
        await queryRunner.query(`CREATE TABLE "home_product_locations" ("home_product_location_id" SERIAL NOT NULL, "name" character varying NOT NULL, "slug" character varying NOT NULL, "image" character varying NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, CONSTRAINT "PK_7b791a6b2e0b08a02ea37539549" PRIMARY KEY ("home_product_location_id"))`);
        await queryRunner.query(`CREATE TABLE "home_products" ("home_product_id" SERIAL NOT NULL, "name" character varying NOT NULL, "monthly_price" character varying NOT NULL, "yearly_price" character varying NOT NULL, "unique_features" text NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "home_product_location_id" integer, "home_property_type_id" integer, CONSTRAINT "PK_2d930eaacc1ebc0243e2ffa11a4" PRIMARY KEY ("home_product_id"))`);
        await queryRunner.query(`CREATE TABLE "home_order_items" ("home_order_item_id" SERIAL NOT NULL, "product_type" character varying NOT NULL, "payinterval_type" character varying NOT NULL, "quantity" character varying NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "home_order_id" integer, "product_id" integer, CONSTRAINT "PK_cdc561e7bb343a2174174a4f36e" PRIMARY KEY ("home_order_item_id"))`);
        await queryRunner.query(`CREATE TABLE "home_card_payments" ("home_card_payment_id" SERIAL NOT NULL, "transaction_id" character varying NOT NULL, "payer_email" character varying NOT NULL, "currency" character varying NOT NULL, "amount" double precision NOT NULL, "payment_status" character varying NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "home_order_id" integer, CONSTRAINT "PK_2fba8dc7cbe5f009a9d136e3590" PRIMARY KEY ("home_card_payment_id"))`);
        await queryRunner.query(`CREATE TYPE "public"."home_owner_orders_status_enum" AS ENUM('Pending', 'Complete', 'Failed', 'Cancelled', 'Refunded')`);
        await queryRunner.query(`CREATE TABLE "home_owner_orders" ("home_order_id" SERIAL NOT NULL, "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "company" character varying, "country" character varying, "street1" character varying, "street2" character varying, "city" character varying, "state" character varying, "pincode" character varying, "phone" character varying, "email" character varying NOT NULL, "prop_street1" character varying, "prop_street2" character varying, "prop_city" character varying, "prop_state" character varying, "prop_zipcode" character varying, "order_notes" character varying, "credit_balance" character varying, "coupon_code" character varying, "subtotal" character varying, "total" character varying, "pay_method" character varying, "status" "public"."home_owner_orders_status_enum" NOT NULL DEFAULT 'Pending', "transaction_date" date, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_dcd393698247252a3230a4bdc15" PRIMARY KEY ("home_order_id"))`);
        await queryRunner.query(`CREATE TABLE "home_applied_coupons" ("home_applied_coupon_id" SERIAL NOT NULL, "coupon_code" character varying NOT NULL, "discount" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "home_order_id" integer, CONSTRAINT "PK_7293f9ed3548846e361cff21813" PRIMARY KEY ("home_applied_coupon_id"))`);
        await queryRunner.query(`CREATE TABLE "home_coupons" ("home_coupon_id" SERIAL NOT NULL, "coupon_code" character varying NOT NULL, "discount_type" character varying NOT NULL, "coupon_amount" character varying NOT NULL, "expiry_date" character varying NOT NULL, CONSTRAINT "PK_02f5fb36cd2abc9bba653b657bc" PRIMARY KEY ("home_coupon_id"))`);
        await queryRunner.query(`CREATE TABLE "home_coverage_upgrades" ("home_coverage_upgrade_id" SERIAL NOT NULL, "name" character varying NOT NULL, "monthly_price" character varying NOT NULL, "yearly_price" character varying NOT NULL, "content" text NOT NULL, "url" text NOT NULL, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, "home_product_id" integer, CONSTRAINT "PK_40091ba6cae762eae2b9f2308b4" PRIMARY KEY ("home_coverage_upgrade_id"))`);
        await queryRunner.query(`CREATE TABLE "home_standard_titles" ("home_standard_title_id" SERIAL NOT NULL, "standard_title" character varying NOT NULL, "home_product_location_id" integer, CONSTRAINT "PK_a1b6c7fdb77cdd64299d28665c2" PRIMARY KEY ("home_standard_title_id"))`);
        await queryRunner.query(`CREATE TABLE "home_standard_features" ("home_standard_feature_id" SERIAL NOT NULL, "standard_feature" character varying NOT NULL, "home_standard_title_id" integer, CONSTRAINT "PK_b2377daad0af94d5582605f3893" PRIMARY KEY ("home_standard_feature_id"))`);
        await queryRunner.query(`CREATE TYPE "public"."real_estate_orders_transaction_status_enum" AS ENUM('Pending', 'Complete', 'Failed', 'Cancelled', 'Refunded')`);
        await queryRunner.query(`CREATE TABLE "real_estate_orders" ("real_estate_order_id" SERIAL NOT NULL, "property_location" character varying NOT NULL, "property_coverage_type" character varying NOT NULL, "real_estate_role" character varying, "prop_street1" character varying NOT NULL, "prop_street2" character varying, "prop_city" character varying NOT NULL, "prop_state" character varying NOT NULL, "prop_zipcode" character varying NOT NULL, "buyer_name" character varying, "buyer_phone" character varying, "buyer_email" character varying, "buyer_agentname" character varying, "buyer_agentphone" character varying, "buyer_agentemail" character varying, "buyer_realstate_company" character varying, "buyer_coordinatorname" character varying, "buyer_coordinatorphone" character varying, "buyer_coordinatoremail" character varying, "seller_phone" character varying, "seller_email" character varying, "seller_agentname" character varying, "seller_realstate_company" character varying, "seller_coordinatorname" character varying, "seller_coordinatorphone" character varying, "seller_coordinatoremail" character varying, "escrow_title" character varying, "escrow_street1" character varying, "escrow_street2" character varying, "escrow_city" character varying, "escrow_state" character varying, "escrow_zipcode" character varying, "escrow_assistantname" character varying, "escrow_assistantemail" character varying, "closing_officername" character varying, "closing_officeremail" character varying, "closing_officerphone" character varying, "closing_date" character varying, "order_biller" character varying, "order_notes" text, "sales_person" character varying, "coupon_code" character varying, "total_amount" double precision, "net_amount" double precision NOT NULL, "credit_balance" double precision, "order_status" integer NOT NULL, "transaction_status" "public"."real_estate_orders_transaction_status_enum", "transaction_date" date, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_51b5710e706f900883124aee112" PRIMARY KEY ("real_estate_order_id"))`);
        await queryRunner.query(`CREATE TABLE "reviews" ("review_id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "review" character varying NOT NULL, "rate" integer NOT NULL, "avatar" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bfe951d9dca4ba99674c5772905" PRIMARY KEY ("review_id"))`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ADD CONSTRAINT "FK_778da0a87fb183b68b394d4243b" FOREIGN KEY ("home_product_location_id") REFERENCES "home_product_locations"("home_product_location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_products" ADD CONSTRAINT "FK_4356406b0ce5b59084980035d8a" FOREIGN KEY ("home_product_location_id") REFERENCES "home_product_locations"("home_product_location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_products" ADD CONSTRAINT "FK_87ab93b49a1ab89134a63e820b2" FOREIGN KEY ("home_property_type_id") REFERENCES "home_property_types"("home_property_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ADD CONSTRAINT "FK_6bada7ed5a7774b0105862e9790" FOREIGN KEY ("home_order_id") REFERENCES "home_owner_orders"("home_order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ADD CONSTRAINT "FK_9c3d4d9c5e9c3db2fcc46b45dc6" FOREIGN KEY ("product_id") REFERENCES "home_products"("home_product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ADD CONSTRAINT "FK_c4867505a32fbc1e9d41768ece5" FOREIGN KEY ("home_order_id") REFERENCES "home_owner_orders"("home_order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_applied_coupons" ADD CONSTRAINT "FK_bf4d0e12e4c3e70b0cd3095ad16" FOREIGN KEY ("home_order_id") REFERENCES "home_owner_orders"("home_order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ADD CONSTRAINT "FK_146b7f12cee176c272d93a4ea4d" FOREIGN KEY ("home_product_id") REFERENCES "home_products"("home_product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_standard_titles" ADD CONSTRAINT "FK_9edd6d58b318281d76ad7a0fd91" FOREIGN KEY ("home_product_location_id") REFERENCES "home_product_locations"("home_product_location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "home_standard_features" ADD CONSTRAINT "FK_a521d6cf6cf08c6c8db49df4bbc" FOREIGN KEY ("home_standard_title_id") REFERENCES "home_standard_titles"("home_standard_title_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "home_standard_features" DROP CONSTRAINT "FK_a521d6cf6cf08c6c8db49df4bbc"`);
        await queryRunner.query(`ALTER TABLE "home_standard_titles" DROP CONSTRAINT "FK_9edd6d58b318281d76ad7a0fd91"`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" DROP CONSTRAINT "FK_146b7f12cee176c272d93a4ea4d"`);
        await queryRunner.query(`ALTER TABLE "home_applied_coupons" DROP CONSTRAINT "FK_bf4d0e12e4c3e70b0cd3095ad16"`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" DROP CONSTRAINT "FK_c4867505a32fbc1e9d41768ece5"`);
        await queryRunner.query(`ALTER TABLE "home_order_items" DROP CONSTRAINT "FK_9c3d4d9c5e9c3db2fcc46b45dc6"`);
        await queryRunner.query(`ALTER TABLE "home_order_items" DROP CONSTRAINT "FK_6bada7ed5a7774b0105862e9790"`);
        await queryRunner.query(`ALTER TABLE "home_products" DROP CONSTRAINT "FK_87ab93b49a1ab89134a63e820b2"`);
        await queryRunner.query(`ALTER TABLE "home_products" DROP CONSTRAINT "FK_4356406b0ce5b59084980035d8a"`);
        await queryRunner.query(`ALTER TABLE "home_location_features" DROP CONSTRAINT "FK_778da0a87fb183b68b394d4243b"`);
        await queryRunner.query(`DROP TABLE "reviews"`);
        await queryRunner.query(`DROP TABLE "real_estate_orders"`);
        await queryRunner.query(`DROP TYPE "public"."real_estate_orders_transaction_status_enum"`);
        await queryRunner.query(`DROP TABLE "home_standard_features"`);
        await queryRunner.query(`DROP TABLE "home_standard_titles"`);
        await queryRunner.query(`DROP TABLE "home_coverage_upgrades"`);
        await queryRunner.query(`DROP TABLE "home_coupons"`);
        await queryRunner.query(`DROP TABLE "home_applied_coupons"`);
        await queryRunner.query(`DROP TABLE "home_owner_orders"`);
        await queryRunner.query(`DROP TYPE "public"."home_owner_orders_status_enum"`);
        await queryRunner.query(`DROP TABLE "home_card_payments"`);
        await queryRunner.query(`DROP TABLE "home_order_items"`);
        await queryRunner.query(`DROP TABLE "home_products"`);
        await queryRunner.query(`DROP TABLE "home_product_locations"`);
        await queryRunner.query(`DROP TABLE "home_location_features"`);
        await queryRunner.query(`DROP TABLE "home_property_types"`);
    }

}
