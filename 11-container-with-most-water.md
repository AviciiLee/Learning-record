````javascript
暴力破解
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0; i< height.length; ++i) {
        for(let j = i + 1; j < height.length; ++j) {
            let minHeight = Math.min(height[i], height[j])
            let area = minHeight *  (j - i)
            if(area > max) {
                max = area
            }
        }
    }
    return max
};
```;

 双指针
```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    for(let i = 0, j = height.length - 1; i < j;) {
        let minHeight = height[i] < height[j] ? height[i++] : height[j--]
        let area = minHeight * (j - i + 1)
        max = Math.max(max, area)
    }
    return max
};
````
