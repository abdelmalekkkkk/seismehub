package main

import (
	"fmt"

	"github.com/abdelmalekkkkk/seismehub/backend/imports"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/forms"
	"github.com/pocketbase/pocketbase/models"
	"github.com/spf13/cobra"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

var villagesCSVPath string

func main() {
	app := pocketbase.New()

	importCommand := &cobra.Command{
		Use: "import",
		Run: func(cmd *cobra.Command, args []string) {
			var villages []*imports.Village

			err := imports.ParseCSVFile(villagesCSVPath, &villages)

			if err != nil {
				panic(err)
			}

			collection, err := app.Dao().FindCollectionByNameOrId("villages")

			if err != nil {
				panic(err)
			}

			for _, village := range villages {
				record := models.NewRecord(collection)
				form := forms.NewRecordUpsert(app, record)
				form.LoadData(map[string]any{
					"latitude":        village.Latitude,
					"longitude":       village.Longitude,
					"population":      village.Population,
					"name":            cases.Title(language.French).String(village.Name),
					"name_ar":         village.NameAR,
					"region":          village.Region,
					"region_ar":       village.RegionAR,
					"province":        village.Province,
					"province_ar":     village.ProvinceAR,
					"commune":         village.Commune,
					"commune_ar":      village.CommuneAR,
					"type":            village.Type,
					"menage":          village.Menage,
					"accessible_road": village.NotAccessibleRoad == 0,
					"area":            village.Area,
					"altitude":        village.Altitude,
					"water_quality":   imports.ParseWaterQuality(village.WaterQuality),
					"risk_slip":       village.RiskSlip,
					"risk_flood":      village.RiskFlood,
					"risk_cold":       village.RiskCold,
					"risk_snow":       village.RiskSnow,
					"has_water_table": village.HasWaterTable == 1,
					"internal_id":     village.InternalID,
					"active":          true,
				})
				err = form.Submit()
				if err != nil {
					fmt.Println(err)
				}
			}
		},
	}

	app.RootCmd.AddCommand(importCommand)

	importCommand.Flags().StringVarP(&villagesCSVPath, "path", "p", "", "Path to CSV file containing villages")
	importCommand.MarkFlagRequired("path")

	if err := app.Start(); err != nil {
		panic(err)
	}

}
