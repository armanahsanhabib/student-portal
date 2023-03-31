import React from 'react';
// import { BsBell } from 'react-icons/bs';
import NoticeList from './NoticeList';

const NoticeBoard = () => {
    return (
        <div className='my-8 px-8 mx-auto' style={{ width: "1200px" }}>
            <NoticeList
                date="31"
                month="Mar"
                title="Midterm Exam Result Published!"
                description="You can see your midterm exam result from the result section."
            />
            <NoticeList
                date="17"
                month="Apr"
                title="শাওন স্যারের ক্লাস টেস্ট!"
                description="১৭ই এপ্রিল সকাল 11:45 থেকে 12:30 পর্যন্ত শাওন স্যারের ক্লাস টেস্ট আছে। সবার অংশগ্রহণ বাধ্যতামূলক।"
            />
            <NoticeList
                date="10"
                month="May"
                title="Semester Fees Payment Deadline!"
                description="সেমিস্টার ফি পরিশোধের সময় শেষ হবে ০৬ মে । এর পর ফি পরিশোধ করা যাবে না।"
            />
        </div>
    );
};

export default NoticeBoard;