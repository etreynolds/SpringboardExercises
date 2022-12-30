def bounded_avg(nums):
    """Return avg of nums (make sure nums are 1-100)

       >>> bounded_avg([1,2,3])
       2.0


    """

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)
