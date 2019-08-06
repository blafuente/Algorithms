arr = [2, 3, 6, 6, 5]
arr2 = [57, 57, -57, 57]

arr.sort(reverse = True)
for i in arr:
    if i < max(arr):
        print i
        break

arr2.sort(reverse = True)
for i in arr2:
    if i < max(arr2):
        print i
        break