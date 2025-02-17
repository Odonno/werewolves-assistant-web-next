#!/bin/bash

if [ $# -eq 0 ]; then
  echo "Usage: $0 <directory-path>"
  exit 1
fi

DIR=$1

if [ ! -d "$DIR" ]; then
  echo "❌Error: $DIR is not a valid directory."
  exit 1
fi

for file in $(find "$DIR" -type f -name "*.feature"); do
  if ! grep -q -E "@shard-(1|2|3|4|5|6|7|8)" "$file"; then
    echo "❌Error: File $file does not contain a shard tag. Please specify either @shard-1, @shard-2, @shard-3, @shard-4, @shard-5, @shard-6, @shard-7 or @shard-8 at the beginning of the file."
    exit 1
  fi
done

echo "✅All feature files in $DIR contain a shard tag."
exit 0