#!/bin/bash

if [ -z "$1" ] ; then
  echo "Enter a database name"
  exit 1
fi

mongoimport --jsonArray --drop --db $1 --collection users  --file ../../server/db/users.json
mongoimport --jsonArray --drop --db $1 --collection recipes  --file ../../server/db/recipes.json
mongoimport --jsonArray --drop --db $1 --collection favorites --file ../../server/db/favorites.json
mongoimport --jsonArray --drop --db $1 --collection reviews --file ../../server/db/reviews.json

