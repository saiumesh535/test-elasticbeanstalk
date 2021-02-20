package utils

var namesMap = map[string]string{
	"Kinesis stream throughput":                                      "Kinesis",
	"awseb-e-hcxzqwn3vm-stack-AWSEBCloudwatchAlarmHigh-UT23S9ZPQDGM": "Cloudwatch",
	"awseb-e-hcxzqwn3vm-stack-AWSEBCloudwatchAlarmLow-1GD7VXJG0W5M1": "CloudwatchLow",
	"awseb-e-hcxzqwn3vm-stack-awsstatushealth-1TZTXD0LDT8OR":         "EB Server",
	"cpuutilizationalert":                                            "ES CPU",
}

func Mapper(name string) string {
	return namesMap[name]
}
