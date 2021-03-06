require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          name:  "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        {
          name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def all_players  
  game_hash[:away][:players] + game_hash[:home][:players]
end


def find_player(player_name)
  all_players.find do |player_hash|
    player_hash[:name] == player_name
  end
end

def num_points_scored(player_name)
  find_player(player_name)[:points]
end

def shoe_size(player_name)
  find_player(player_name)[:shoe]
end


# # # EXERCISE:
# # # Define a method called get_names that takes an array of instructors
# # # and returns just their names.
# instructors = [
#   { name: 'Graham', hometown: 'Oak Park, IL', mood: 'excited' },
#   { name: 'Ian', hometown: 'Suttons Bay, MI', mood: 'tired voice' },
#   { name: 'Randy', hometown: 'Teh Bronx', mood: 'excited' },
#   { name: 'Jack', hometown: 'Hannacroix, NY', mood: 'super excited' }
# ]

# transformed_array = []
# instructors.each do |instructor_hash|
#   transformed_array << instructor_hash[:name]
# end
# p transformed_array

# transformed_array = instructors.map do |instructor_hash|
#   instructor_hash[:hometown].length
# end
# p transformed_array



# selected_array = instructors.select do |instructor_hash|
#   instructor_hash[:mood] == 'excited'
# end


# whatever = instructors.find do |instructor_hash|
#   # binding.pry
#   instructor_hash[:name].length == 3
# end

# p whatever

# def get_names(instructors)
 
# end


# p get_names(instructors)





# # EXERCISE
# # What do the following return?

# arr = (1..100).to_a

# arr.find_all do |num|
#   num.even?
# end



# arr.select do |num|
#   7
# end








