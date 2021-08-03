class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user_id
      t.belongs_to :hike_id
      t.string :content

      t.timestamps
    end
  end
end
