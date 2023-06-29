//Problem 04

function findDisjointArrays(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer = [
      [...set1].filter(num => !set2.has(num)),
      [...set2].filter(num => !set1.has(num))
    ];
  
    return answer;
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const result = findDisjointArrays(nums1, nums2);
  console.log(result); // Output: [[1, 3], [4, 6]]
  