Intro to SQL
===

## SWBATs

*  [ ] Explain persistence and the need for using SQL
*  [ ] Define SQL
*  [ ] Explain the difference between SQLite3 and SQL
*  [ ] Explore provided data through SQLite Browser
*  [ ] Define CRUD
*  [ ] Perform CRUD actions on a single table
*  [ ] Perform CRUD actions across related tables

## Outline
- 15 mins: discussion of databases and SQL
- 30 mins: look at a SQL database and write some SQL

## Key Questions
- What can I do with data?
- Why is persistence important? How have we been persisting data so far?
- What is CRUD?
- How does an app like Instagram use CRUD?
- What is a database?
- What kinds of databases are there?
- What is SQL?

## Set Up 

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table

2. Write the SQL to select the artist with the name "Black Sabbath"
  2a. Change the query to include all artists with the word 'black' in their name

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key, a name field of type text, and an artist_id with a type of integer

4. Write the SQL to add yourself as a fan of an artist (pick an artist_id)

5. Write the SQL to display an artist's name next to their fan's name

6. *bonus* Write the SQL to display artist name, album name and number of tracks on that album
