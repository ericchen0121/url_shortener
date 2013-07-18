class Url < ActiveRecord::Base
  before_save :shorten_url
  validates :long, presence: true
  validates_format_of :long, :with => URI::regexp(%w(http https))
  validates_uniqueness_of :long
  
  private
    def shorten_url
      if !self.short
        self.short = "http://www.dbc.ly/#{SecureRandom.hex(3)}"
      end
    end
end
