# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_13_153417) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "snacks", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users_snacks", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "snack_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["snack_id"], name: "index_users_snacks_on_snack_id"
    t.index ["user_id"], name: "index_users_snacks_on_user_id"
  end

  add_foreign_key "users_snacks", "snacks"
  add_foreign_key "users_snacks", "users"
end
