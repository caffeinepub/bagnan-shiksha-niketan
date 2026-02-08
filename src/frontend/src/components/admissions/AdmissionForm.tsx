import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useCreateAdmissionSubmission } from '../../hooks/useCreateAdmissionSubmission';
import { CLASS_LEVELS } from '../../learning/classLevels';

interface FormData {
  parentName: string;
  childName: string;
  childClass: string;
  phone: string;
  email?: string;
  address?: string;
  message?: string;
}

interface AdmissionFormProps {
  onSuccess: () => void;
}

export default function AdmissionForm({ onSuccess }: AdmissionFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>();

  const childClass = watch('childClass');
  const createSubmission = useCreateAdmissionSubmission();

  const onSubmit = async (data: FormData) => {
    try {
      await createSubmission.mutateAsync(data);
      onSuccess();
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <Card className="border-2 border-primary/20 shadow-playful-lg animate-scale-in">
      <CardHeader>
        <CardTitle className="font-display text-2xl md:text-3xl text-center">
          Admission Enquiry Form
        </CardTitle>
        <CardDescription className="text-center text-base">
          Fill in the details below and we'll get back to you soon!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="parentName">
              Parent/Guardian Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="parentName"
              {...register('parentName', { required: 'Parent name is required' })}
              placeholder="Enter parent or guardian name"
              className={errors.parentName ? 'border-destructive' : ''}
            />
            {errors.parentName && (
              <p className="text-sm text-destructive">{errors.parentName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="childName">
              Child's Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="childName"
              {...register('childName', { required: 'Child name is required' })}
              placeholder="Enter child's name"
              className={errors.childName ? 'border-destructive' : ''}
            />
            {errors.childName && (
              <p className="text-sm text-destructive">{errors.childName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="childClass">
              Class/Standard <span className="text-destructive">*</span>
            </Label>
            <Select
              value={childClass}
              onValueChange={(value) => setValue('childClass', value, { shouldValidate: true })}
            >
              <SelectTrigger id="childClass" className={errors.childClass ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                {CLASS_LEVELS.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    {level.displayName}
                  </SelectItem>
                ))}
                {[4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <SelectItem key={`class${num}`} value={`class${num}`}>
                    Class {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input
              type="hidden"
              {...register('childClass', { required: 'Please select a class' })}
            />
            {errors.childClass && (
              <p className="text-sm text-destructive">{errors.childClass.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+\-\s()]+$/,
                  message: 'Please enter a valid phone number',
                },
              })}
              placeholder="Enter phone number"
              className={errors.phone ? 'border-destructive' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email (Optional)</Label>
            <Input
              id="email"
              type="email"
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
              placeholder="Enter email address"
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address (Optional)</Label>
            <Textarea
              id="address"
              {...register('address')}
              placeholder="Enter your address"
              rows={2}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message/Notes (Optional)</Label>
            <Textarea
              id="message"
              {...register('message')}
              placeholder="Any additional information or questions"
              rows={3}
            />
          </div>

          {createSubmission.isError && (
            <div className="p-4 bg-destructive/10 border-2 border-destructive/30 rounded-lg">
              <p className="text-sm text-destructive font-medium">
                Submission failed. Please check your information and try again.
              </p>
            </div>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full text-lg"
            disabled={createSubmission.isPending}
          >
            {createSubmission.isPending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Enquiry'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

