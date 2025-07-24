# Work experience 2025

## Task 2 - Overview Page

### Task 2a 
Task 2a was to create a new page with a new table that included locations, the last scan date, the total number of children and the total size. 

```
  const baseArr = Object.values(rawData).map((entry, idx) => ({
    originalIndex: idx + 1,      // The original position in the data 
    label: entry.path,           // The path name
    date: entry.last_scan_date,  // When it was last scanned
    numChildren: entry.total_count,
    totalSize: entry.total_size
  }));
```
I added these two columns to the original table:

```
                <td>{entry.numChildren}</td>
                <td>{entry.totalSize}</td>
```

### Task 2b
Task 2b was to add the ability to sort by increasing and decreasing for the total number of children and the total size. If the right button was clicked, sortOrder was switched, and it would be sorted by either the number of children or the total size. 

```
    } else if (sortBy === 'numChildren') {
      return sortOrder === 'ascending'
        //ascent
        ? a.numChildren - b.numChildren
        //descent
        : b.numChildren - a.numChildren
    } else if (sortBy === 'totalSize') {
      return sortOrder === 'ascending'
        //ascent
        ? a.totalSize - b.totalSize
        //descent
        : b.totalSize - a.totalSize
    }
```

