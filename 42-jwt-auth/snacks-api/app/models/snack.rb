class Snack < ApplicationRecord

  def serializable_hash(opts)
    super(opts.merge(only: [:id, :name]))
  end
  
end
