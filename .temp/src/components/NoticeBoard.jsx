import React from 'react';
import NoticeList from './NoticeList';

const NoticeBoard = () => {
    return (
        <div className='my-3 md:my-5 px-3 md:px-8 mx-auto md:container'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <NoticeList
                    date="31 Mar 2021"
                    title="Midterm Exam Result Published!"
                    notice="You can see your midterm exam result from the result section."
                />
                <NoticeList
                    date="17 Apr 2021"
                    title="শাওন স্যারের ক্লাস টেস্ট!"
                    notice="১৭ই এপ্রিল সকাল 11:45 থেকে 12:30 পর্যন্ত শাওন স্যারের ক্লাস টেস্ট আছে। সবার অংশগ্রহণ বাধ্যতামূলক।"
                />
                <NoticeList
                    date="10 May 2021"
                    title="Semester Fees Payment Deadline!"
                    notice="সেমিস্টার ফি পরিশোধের সময় শেষ হবে ০৬ মে । এর পর ফি পরিশোধ করা যাবে না।"
                />
                <NoticeList
                    date="31 Mar 2021"
                    title="Midterm Exam Result Published!"
                    notice="You can see your midterm exam result from the result section."
                />
                <NoticeList
                    date="10 May 2021"
                    title="Semester Fees Payment Deadline!"
                    notice="সেমিস্টার ফি পরিশোধের সময় শেষ হবে ০৬ মে । এর পর ফি পরিশোধ করা যাবে না।"
                />
            </div>
        </div>
    );
};

export default NoticeBoard;