def char_count(str):
  new_str = remove_whitespace(str)
  unsorted_dict = {}
  for i, x in enumerate(new_str):
    if x in unsorted_dict:
      unsorted_dict[x] += 1
    else:
      unsorted_dict[x] = 1


  sorted_numeric = sorted(unsorted_dict.items(), key=lambda x: (-x[1], x[0]))

  result = []
  for i in sorted_numeric:
    result.append([i[0], i[1]])

  return result

def remove_whitespace(str):
  return str.replace(' ', "")