### Work-Experience-2025

## Task 4 - Quota Tables

### Task 4a
Task 4a was to create a new page with a new table that would display the quota sizes along with the total sizes and the locations. First, I made the API endpoint for the quota data and then I made the function to load the quota values from their JSON file into a python dictionary. 

```
#URL returns data loaded from the load_quota function
@app.get("/api/full-GWS-quota")
def full_GWS_quota():
  data = load_quota_data()
  return data
```

The JSON files were read and stored in python as dictionaries.Then, the dictionary's - the one that held the quota values - keys were looped through. 

```
    data_path_quota = Path("./data/gws_quota.json")
    with open(data_path_quota, "r") as f:
      quotaData = json.load(f)
      originalData = load_data()
    for key in quotaData.keys():#in quota
      dictionaryQuotaKey = key
      dictionaryQuotaValue = quotaData[dictionaryQuotaKey]
```


Then in another loop nested within, the dictionary that was storing the data had its values looped through. If its path value matched the current quota key, then a new key and value would be updated to the data dictionary. 

```
      for x in originalData.values():#in data
        if x["path"] == dictionaryQuotaKey:
          x.update   ({"quota_value":dictionaryQuotaValue})
```

Then I added columns for the total size and the quota values. 

![](.\)

### Task 4b
Task 4b was to highlight any rows where the total size was bigger than the quota size. 