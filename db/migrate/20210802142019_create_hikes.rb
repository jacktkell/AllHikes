class CreateHikes < ActiveRecord::Migration[6.1]
  def change
    create_table :hikes do |t|
      t.float :length
      t.string :name
      t.float :x_coordinate
      t.float :y_coordinate
      t.float :elevation_gain
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end
