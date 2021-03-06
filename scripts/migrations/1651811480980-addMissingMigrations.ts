import {MigrationInterface, QueryRunner} from "typeorm";

export class addMissingMigrations1651811480980 implements MigrationInterface {
    name = 'addMissingMigrations1651811480980'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "real_coverage_types" ("coverage_type_id" SERIAL NOT NULL, "type_name" character varying NOT NULL, CONSTRAINT "PK_fae3925ecf3d6f6c2c5fd79df44" PRIMARY KEY ("coverage_type_id"))`);
        await queryRunner.query(`CREATE TABLE "real_locations" ("location_id" SERIAL NOT NULL, "location_name" character varying NOT NULL, CONSTRAINT "PK_8c0ca3e7aa5fbe9aeaba1458bfd" PRIMARY KEY ("location_id"))`);
        await queryRunner.query(`CREATE TABLE "real_products" ("product_id" SERIAL NOT NULL, "product_name" character varying NOT NULL, "short_desc" text, "price" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_006f416246d202870992dfb615e" PRIMARY KEY ("product_id"))`);
        await queryRunner.query(`CREATE TABLE "real_order_items" ("real_order_item_id" SERIAL NOT NULL, "product_name" character varying NOT NULL, "product_type" character varying NOT NULL, "quantity" character varying NOT NULL, "rate" double precision NOT NULL, "line_total" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "order_id" integer, "product_id" integer, CONSTRAINT "PK_635c8df6f5a111920d2c95e12ba" PRIMARY KEY ("real_order_item_id"))`);
        await queryRunner.query(`CREATE TABLE "real_property_types" ("property_id" SERIAL NOT NULL, "property_name" character varying NOT NULL, "question_name" character varying NOT NULL, CONSTRAINT "PK_4604ab0a7ba5bebedecebfcfeea" PRIMARY KEY ("property_id"))`);
        await queryRunner.query(`CREATE TYPE "public"."real_orders_order_status_enum" AS ENUM('Pending', 'Complete', 'Failed', 'Cancelled', 'Refunded')`);
        await queryRunner.query(`CREATE TABLE "real_orders" ("order_id" SERIAL NOT NULL, "i_am_the" text, "real_estate_role" character varying, "prop_street1" character varying NOT NULL, "prop_street2" character varying, "prop_city" character varying NOT NULL, "prop_state" character varying NOT NULL, "prop_zipcode" character varying NOT NULL, "buyer_name" character varying, "buyer_phone" character varying, "buyer_email" character varying, "buyer_agentname" character varying, "buyer_agentphone" character varying, "buyer_agentemail" character varying, "buyer_realstate_company" character varying, "buyer_coordinatorname" character varying, "buyer_coordinatorphone" character varying, "buyer_coordinatoremail" character varying, "seller_name" character varying, "seller_phone" character varying, "seller_email" character varying, "seller_agentname" character varying, "seller_agentphone" character varying, "seller_agentemail" character varying, "seller_realstate_company" character varying, "seller_coordinatorname" character varying, "seller_coordinatorphone" character varying, "seller_coordinatoremail" character varying, "escrow_title" character varying, "escrow_street1" character varying, "escrow_street2" character varying, "escrow_city" character varying, "escrow_state" character varying, "escrow_zipcode" character varying, "escrow_assistantname" character varying, "escrow_assistantemail" character varying, "closing_officername" character varying, "closing_officeremail" character varying, "closing_officerphone" character varying, "closing_date" character varying, "order_biller" character varying, "order_notes" text, "sales_person" character varying, "coupon_code" character varying, "total_amount" double precision, "net_amount" double precision NOT NULL, "credit_balance" double precision, "order_status" "public"."real_orders_order_status_enum", "transaction_date" date, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "property_location_id" integer, "property_type_id" integer, "property_coverage_type_id" integer, CONSTRAINT "PK_c64a0d208ebd1288c2c8c3204ad" PRIMARY KEY ("order_id"))`);
        await queryRunner.query(`CREATE TABLE "real_applied_coupons" ("real_estate_applied_coupon_id" SERIAL NOT NULL, "coupon_code" character varying NOT NULL, "discount" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "order_id" integer, CONSTRAINT "PK_dcd0d00c131f595ec2ca1e0ba6a" PRIMARY KEY ("real_estate_applied_coupon_id"))`);
        await queryRunner.query(`CREATE TABLE "real_coupons" ("coupon_id" SERIAL NOT NULL, "coupon_code" character varying NOT NULL, "discount_type" character varying NOT NULL, "coupon_amount" character varying NOT NULL, "expiry_date" date, CONSTRAINT "PK_86ae7c9eb89c38ab5b352b5572a" PRIMARY KEY ("coupon_id"))`);
        await queryRunner.query(`CREATE TABLE "real_coverages" ("coverage_id" SERIAL NOT NULL, "product_id" character varying NOT NULL, "coverage_type" character varying NOT NULL, "coverage_name" character varying NOT NULL, "coverage_price" character varying NOT NULL, "content" text NOT NULL, "info" text NOT NULL, "url" text NOT NULL, CONSTRAINT "PK_2340587e6c798d57621c29182e9" PRIMARY KEY ("coverage_id"))`);
        await queryRunner.query(`CREATE TABLE "real_features" ("feature_id" SERIAL NOT NULL, "feature_name" character varying NOT NULL, "feature_title_id" integer, CONSTRAINT "PK_11bed0ab57fb02c908c866f3392" PRIMARY KEY ("feature_id"))`);
        await queryRunner.query(`CREATE TABLE "real_feature_titles" ("feature_title_id" SERIAL NOT NULL, "title" character varying NOT NULL, "location_id" integer, CONSTRAINT "PK_49bbf6cf3a63331664bc3e376a4" PRIMARY KEY ("feature_title_id"))`);
        await queryRunner.query(`CREATE TABLE "real_property_type_question" ("real_pro_id" SERIAL NOT NULL, "question" character varying NOT NULL, "input_name" character varying NOT NULL, "input_type" character varying NOT NULL, "valid_options" character varying NOT NULL, "default_value" character varying NOT NULL, "property_type_id" integer, CONSTRAINT "PK_d94b728ae19d75a5deca2c134d7" PRIMARY KEY ("real_pro_id"))`);
        await queryRunner.query(`CREATE TABLE "real_propertype_question_relationships" ("real_pro_qs_id" SERIAL NOT NULL, "location_id" integer, "coverage_type_id" integer, "property_type_id" integer, "question_id" integer, CONSTRAINT "PK_0a2207bf58780bf1974565e18a9" PRIMARY KEY ("real_pro_qs_id"))`);
        await queryRunner.query(`CREATE TABLE "real_product_features" ("product_feature_id" SERIAL NOT NULL, "name" character varying NOT NULL, "content" text NOT NULL, "location_id" integer, CONSTRAINT "PK_9714699c2a73edb4b76549477f7" PRIMARY KEY ("product_feature_id"))`);
        await queryRunner.query(`CREATE TABLE "real_product_feature_relationships" ("product_feature_relationship_id" SERIAL NOT NULL, "product_feature_id" integer, "product_id" integer, CONSTRAINT "PK_a48a993724f6b19d7b3f98822e6" PRIMARY KEY ("product_feature_relationship_id"))`);
        await queryRunner.query(`CREATE TABLE "real_questions" ("question_id" SERIAL NOT NULL, "question_name" character varying NOT NULL, CONSTRAINT "PK_6e4ef0c9439ea2f22b44aac2e2a" PRIMARY KEY ("question_id"))`);
        await queryRunner.query(`CREATE TABLE "real_question_relationships" ("real_question_relationship_id" SERIAL NOT NULL, "question_value" character varying NOT NULL, "products" character varying NOT NULL, "location_id" integer, "coverage_type_id" integer, "property_type_id" integer, "question_id" integer, CONSTRAINT "PK_52d9e5462389fe0a087cdc1ff6e" PRIMARY KEY ("real_question_relationship_id"))`);
        await queryRunner.query(`CREATE TABLE "real_relationships" ("real_relationship_id" SERIAL NOT NULL, "product_ids" character varying NOT NULL, "location_id" integer, "coverage_type_id" integer, "question_type_id" integer, CONSTRAINT "PK_e13193218cc7dd47e2ed43e7d9a" PRIMARY KEY ("real_relationship_id"))`);
        await queryRunner.query(`CREATE TABLE "real_user_types" ("user_type_id" SERIAL NOT NULL, "user_type" character varying NOT NULL, CONSTRAINT "PK_eaf2bcbf32899c4c1a18ecf2b3e" PRIMARY KEY ("user_type_id"))`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "created_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "created_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "real_order_items" ADD CONSTRAINT "FK_3e636a2e57e3edc3dd43ae513db" FOREIGN KEY ("order_id") REFERENCES "real_orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_order_items" ADD CONSTRAINT "FK_c93b296a8d37688729ca1e203d7" FOREIGN KEY ("product_id") REFERENCES "real_products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_orders" ADD CONSTRAINT "FK_ac3bb59c67efc2573784fe0320c" FOREIGN KEY ("property_location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_orders" ADD CONSTRAINT "FK_b7435b2951e5469bfb5c8b415bb" FOREIGN KEY ("property_type_id") REFERENCES "real_property_types"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_orders" ADD CONSTRAINT "FK_eae5c7d3523d8f2b44b1cf9c3c0" FOREIGN KEY ("property_coverage_type_id") REFERENCES "real_coverage_types"("coverage_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_applied_coupons" ADD CONSTRAINT "FK_772f72f5048bc1e5c68e5370e60" FOREIGN KEY ("order_id") REFERENCES "real_orders"("order_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_features" ADD CONSTRAINT "FK_bcdb82a20f8f6e9382751cf0673" FOREIGN KEY ("feature_title_id") REFERENCES "real_feature_titles"("feature_title_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_feature_titles" ADD CONSTRAINT "FK_0dadd8ba2a767e78c5d87aac320" FOREIGN KEY ("location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_property_type_question" ADD CONSTRAINT "FK_840a2fc0d32a23db144ca1e6e85" FOREIGN KEY ("property_type_id") REFERENCES "real_property_types"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" ADD CONSTRAINT "FK_825576da4d03b9f08e7160922aa" FOREIGN KEY ("location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" ADD CONSTRAINT "FK_60925c32507a8ee48e134ea0f23" FOREIGN KEY ("coverage_type_id") REFERENCES "real_coverage_types"("coverage_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" ADD CONSTRAINT "FK_60cffd0c0543d41e97305de2531" FOREIGN KEY ("property_type_id") REFERENCES "real_property_types"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" ADD CONSTRAINT "FK_187cbd2c06aba741e1d2ee5c442" FOREIGN KEY ("question_id") REFERENCES "real_property_type_question"("real_pro_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_product_features" ADD CONSTRAINT "FK_8d0a402de0479391f4b0dfc9690" FOREIGN KEY ("location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_product_feature_relationships" ADD CONSTRAINT "FK_6aec68acc4156df31d349b9c443" FOREIGN KEY ("product_feature_id") REFERENCES "real_product_features"("product_feature_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_product_feature_relationships" ADD CONSTRAINT "FK_9c01f974ba6aef881a2a0fbe661" FOREIGN KEY ("product_id") REFERENCES "real_products"("product_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" ADD CONSTRAINT "FK_0b24d2fd040bfdb0f3a5c3c1b9e" FOREIGN KEY ("location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" ADD CONSTRAINT "FK_a11153d2a660c3d1e5022edf949" FOREIGN KEY ("coverage_type_id") REFERENCES "real_coverage_types"("coverage_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" ADD CONSTRAINT "FK_ffbbfc5cd191ca57f3e536ca6ae" FOREIGN KEY ("property_type_id") REFERENCES "real_property_types"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" ADD CONSTRAINT "FK_66b7773ac18bcb0d924998dd4ed" FOREIGN KEY ("question_id") REFERENCES "real_questions"("question_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_relationships" ADD CONSTRAINT "FK_3401e5e7aa68dbf1b9a313dc2ce" FOREIGN KEY ("location_id") REFERENCES "real_locations"("location_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_relationships" ADD CONSTRAINT "FK_750ecbe751706cb8e4c20084059" FOREIGN KEY ("coverage_type_id") REFERENCES "real_coverage_types"("coverage_type_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "real_relationships" ADD CONSTRAINT "FK_fceb22fc71803f5de539f2f84b8" FOREIGN KEY ("question_type_id") REFERENCES "real_property_types"("property_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_relationships" DROP CONSTRAINT "FK_fceb22fc71803f5de539f2f84b8"`);
        await queryRunner.query(`ALTER TABLE "real_relationships" DROP CONSTRAINT "FK_750ecbe751706cb8e4c20084059"`);
        await queryRunner.query(`ALTER TABLE "real_relationships" DROP CONSTRAINT "FK_3401e5e7aa68dbf1b9a313dc2ce"`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" DROP CONSTRAINT "FK_66b7773ac18bcb0d924998dd4ed"`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" DROP CONSTRAINT "FK_ffbbfc5cd191ca57f3e536ca6ae"`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" DROP CONSTRAINT "FK_a11153d2a660c3d1e5022edf949"`);
        await queryRunner.query(`ALTER TABLE "real_question_relationships" DROP CONSTRAINT "FK_0b24d2fd040bfdb0f3a5c3c1b9e"`);
        await queryRunner.query(`ALTER TABLE "real_product_feature_relationships" DROP CONSTRAINT "FK_9c01f974ba6aef881a2a0fbe661"`);
        await queryRunner.query(`ALTER TABLE "real_product_feature_relationships" DROP CONSTRAINT "FK_6aec68acc4156df31d349b9c443"`);
        await queryRunner.query(`ALTER TABLE "real_product_features" DROP CONSTRAINT "FK_8d0a402de0479391f4b0dfc9690"`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" DROP CONSTRAINT "FK_187cbd2c06aba741e1d2ee5c442"`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" DROP CONSTRAINT "FK_60cffd0c0543d41e97305de2531"`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" DROP CONSTRAINT "FK_60925c32507a8ee48e134ea0f23"`);
        await queryRunner.query(`ALTER TABLE "real_propertype_question_relationships" DROP CONSTRAINT "FK_825576da4d03b9f08e7160922aa"`);
        await queryRunner.query(`ALTER TABLE "real_property_type_question" DROP CONSTRAINT "FK_840a2fc0d32a23db144ca1e6e85"`);
        await queryRunner.query(`ALTER TABLE "real_feature_titles" DROP CONSTRAINT "FK_0dadd8ba2a767e78c5d87aac320"`);
        await queryRunner.query(`ALTER TABLE "real_features" DROP CONSTRAINT "FK_bcdb82a20f8f6e9382751cf0673"`);
        await queryRunner.query(`ALTER TABLE "real_applied_coupons" DROP CONSTRAINT "FK_772f72f5048bc1e5c68e5370e60"`);
        await queryRunner.query(`ALTER TABLE "real_orders" DROP CONSTRAINT "FK_eae5c7d3523d8f2b44b1cf9c3c0"`);
        await queryRunner.query(`ALTER TABLE "real_orders" DROP CONSTRAINT "FK_b7435b2951e5469bfb5c8b415bb"`);
        await queryRunner.query(`ALTER TABLE "real_orders" DROP CONSTRAINT "FK_ac3bb59c67efc2573784fe0320c"`);
        await queryRunner.query(`ALTER TABLE "real_order_items" DROP CONSTRAINT "FK_c93b296a8d37688729ca1e203d7"`);
        await queryRunner.query(`ALTER TABLE "real_order_items" DROP CONSTRAINT "FK_3e636a2e57e3edc3dd43ae513db"`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_coverage_upgrades" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_card_payments" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_order_items" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_products" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_product_locations" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_location_features" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "updated_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "created_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "home_property_types" ALTER COLUMN "created_at" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "real_user_types"`);
        await queryRunner.query(`DROP TABLE "real_relationships"`);
        await queryRunner.query(`DROP TABLE "real_question_relationships"`);
        await queryRunner.query(`DROP TABLE "real_questions"`);
        await queryRunner.query(`DROP TABLE "real_product_feature_relationships"`);
        await queryRunner.query(`DROP TABLE "real_product_features"`);
        await queryRunner.query(`DROP TABLE "real_propertype_question_relationships"`);
        await queryRunner.query(`DROP TABLE "real_property_type_question"`);
        await queryRunner.query(`DROP TABLE "real_feature_titles"`);
        await queryRunner.query(`DROP TABLE "real_features"`);
        await queryRunner.query(`DROP TABLE "real_coverages"`);
        await queryRunner.query(`DROP TABLE "real_coupons"`);
        await queryRunner.query(`DROP TABLE "real_applied_coupons"`);
        await queryRunner.query(`DROP TABLE "real_orders"`);
        await queryRunner.query(`DROP TYPE "public"."real_orders_order_status_enum"`);
        await queryRunner.query(`DROP TABLE "real_property_types"`);
        await queryRunner.query(`DROP TABLE "real_order_items"`);
        await queryRunner.query(`DROP TABLE "real_products"`);
        await queryRunner.query(`DROP TABLE "real_locations"`);
        await queryRunner.query(`DROP TABLE "real_coverage_types"`);
    }

}
