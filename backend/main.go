package main

import (
	"encoding/csv"
	"fmt"
	"os"
	"strconv"
	"time"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/models"
)

func main() {
	app := pocketbase.New()

	go func() {
		fmt.Println("Waiting to start")
		time.Sleep(10 * time.Second)
		file, err := os.Open("villages.csv")

		if err != nil {
			panic(err)
		}

		csvReader := csv.NewReader(file)
		records, err := csvReader.ReadAll()

		if err != nil {
			panic(err)
		}

		collection, err := app.Dao().FindCollectionByNameOrId("npm9jj0rej71lsk")
		if err != nil {
			panic(err)
		}

		for _, record := range records {
			region_fr := record[2]
			province_fr := record[3]
			cercle_fr := record[4]
			commune_fr := record[5]
			nom_fr := record[6]
			nom_ar := record[7]
			type_localite := record[8]
			population, _ := strconv.ParseInt(record[11], 10, 64)
			menage, _ := strconv.ParseInt(record[12], 10, 64)
			total_menages_sd, _ := strconv.ParseInt(record[13], 10, 64)
			longitude, _ := strconv.ParseFloat(record[14], 64)
			latitude, _ := strconv.ParseFloat(record[15], 64)

			village := models.NewRecord(collection)
			village.Set("name", nom_fr)
			village.Set("creator_name", "SYSTEM")
			village.Set("latitude", latitude)
			village.Set("longitude", longitude)
			village.Set("population", population)
			village.Set("menage", menage)
			village.Set("total_menages_sd", total_menages_sd)
			village.Set("region", region_fr)
			village.Set("province", province_fr)
			village.Set("cercle", cercle_fr)
			village.Set("commune", commune_fr)
			village.Set("name_ar", nom_ar)
			village.Set("type", type_localite)
			village.Set("name", nom_fr)
			village.Set("name", nom_fr)
			village.Set("name", nom_fr)
			village.Set("latitude", latitude)
			village.Set("longitude", longitude)
			village.Set("active", true)

			if err := app.Dao().SaveRecord(village); err != nil {
				panic(err)
			}
		}

	}()

	if err := app.Start(); err != nil {
		panic(err)
	}

}
