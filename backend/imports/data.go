package imports

type Village struct {
	InternalID        string  `csv:"internal_id"`
	Latitude          float64 `csv:"latitude"`
	Longitude         float64 `csv:"longitude"`
	Altitude          float64 `csv:"altitude"`
	Population        int     `csv:"population"`
	Name              string  `csv:"name"`
	NameAR            string  `csv:"name_ar"`
	Region            string  `csv:"region"`
	RegionAR          string  `csv:"region_ar"`
	Province          string  `csv:"province"`
	ProvinceAR        string  `csv:"province_ar"`
	Commune           string  `csv:"commune"`
	CommuneAR         string  `csv:"commune_ar"`
	Type              string  `csv:"type"`
	Menage            int     `csv:"menage"`
	Severity          int     `csv:"severity"`
	NotAccessibleRoad int     `csv:"not_accessible_road"`
	Area              string  `csv:"area"`
	WaterQuality      string  `csv:"water_quality"`
	RiskSlip          int     `csv:"risk_slip"`
	RiskFlood         int     `csv:"risk_flood"`
	RiskCold          int     `csv:"risk_cold"`
	RiskSnow          int     `csv:"risk_snow"`
	HasWaterTable     int     `csv:"has_water_table"`
	Active            bool
}

func ParseWaterQuality(quality string) string {
	if quality == "BONNE" {
		return "GOOD"
	}

	if quality == "MAUVAISE" {
		return "BAD"
	}

	return quality
}
