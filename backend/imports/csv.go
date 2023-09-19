package imports

import (
	"fmt"
	"os"

	"github.com/gocarina/gocsv"
)

func ParseCSVFile(path string, villages *[]*Village) error {
	file, err := os.Open(path)

	if err != nil {
		return fmt.Errorf("error while opening csv file: %w", err)
	}

	defer file.Close()

	err = gocsv.UnmarshalFile(file, villages)

	if err != nil {
		return fmt.Errorf("error while unmarshaling csv file: %w", err)
	}

	return nil
}
